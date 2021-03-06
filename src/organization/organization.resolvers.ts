import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Organization } from '../graphql.schema';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import {OrganizationEntity} from "./organization.entity";
import {GqlAuthGuard} from "../auth/gqlAuth";
const pubSub = new PubSub();

@UseGuards(GqlAuthGuard)
@Resolver('Organization')
export class OrganizationResolvers {
  constructor(private readonly organizationService: OrganizationService) {}

  @Query()
  async getOrganizations() {
    return await this.organizationService.findAll();
  }

  @Query('organization')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<OrganizationEntity> {
    return await this.organizationService.findOneById(id);
  }

  @Mutation('createOrganization')
  async create(@Args('createOrganizationInput') args: CreateOrganizationDto){
    console.log(args)
    const organizationCreated = await this.organizationService.create(args);

    pubSub.publish('organizationCreated', { organizationCreated: organizationCreated });
    return organizationCreated;
  }

  @Mutation('updateOrganization')
  async update(@Args('updateOrganizationInput') args){
    const organizationCreated = await this.organizationService.update(args);
    
  }

  @Mutation('deleteOrganization')
  async delete(@Args('deleteOrganizationInput') args){
    
    const organizationCreated = await this.organizationService.delete(args);
    
  }

  @Subscription('organizationCreated')
  organizationCreated() {
    return pubSub.asyncIterator('organizationCreated');
  }
}