import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Event } from '../graphql.schema';
import { EventGuard } from './event.guard';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { AuthGuard } from '@nestjs/passport';
import {GqlAuthGuard} from "../auth/gqlAuth";
const pubSub = new PubSub();

@UseGuards(GqlAuthGuard)
@Resolver('Event')
export class EventResolvers {
  constructor(private readonly eventService: EventService) {}

  @Query()
  async getEvents() {
    return await this.eventService.findAll();
  }

  @Query('event')
  async findOneById(
   
    id: string,
  ): Promise<Event> {
    return await this.eventService.findOneById(id);
  }

  @Mutation('createEvent')
  async create(@Args('createEventInput') args: CreateEventDto) {
    const eventCreated = await this.eventService.create(args);
    pubSub.publish('eventCreated', { eventCreated: eventCreated });
    // return eventCreated;
  }

  @Subscription('eventCreated')
  eventCreated() {
    return pubSub.asyncIterator('eventCreated');
  }
}