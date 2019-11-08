import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Chat = {
   __typename?: 'Chat',
  id: Scalars['Int'],
  messages: Array<Maybe<Message>>,
  participants: Array<Maybe<User>>,
  createdAt: Scalars['String'],
  updatedAt?: Maybe<Scalars['String']>,
};

export type FacebookConnectPayload = {
   __typename?: 'FacebookConnectPayload',
  responseStatus: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
};

export type Message = {
   __typename?: 'Message',
  id: Scalars['Int'],
  text: Scalars['String'],
  chat: Chat,
  user: User,
  createdAt: Scalars['String'],
  updatedAt?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  ConnectFacebook: FacebookConnectPayload,
};


export type MutationConnectFacebookArgs = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email?: Maybe<Scalars['String']>,
  facebookID: Scalars['String']
};

export type Place = {
   __typename?: 'Place',
  id: Scalars['Int'],
  name: Scalars['String'],
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  address: Scalars['String'],
  isFavorite: Scalars['Boolean'],
  createdAt: Scalars['String'],
  updatedAt?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  user?: Maybe<User>,
};

export type Ride = {
   __typename?: 'Ride',
  id: Scalars['Int'],
  status: Scalars['String'],
  pickUpAddress: Scalars['String'],
  pickUpLatitude: Scalars['Float'],
  pickUpLongitude: Scalars['Float'],
  dropOffAddress: Scalars['String'],
  dropOffLattude: Scalars['Float'],
  dropOffLongitude: Scalars['Float'],
  price: Scalars['Float'],
  distance: Scalars['String'],
  duration: Scalars['String'],
  driver: User,
  passenger: User,
  createdAt: Scalars['String'],
  updatedAt?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  password?: Maybe<Scalars['String']>,
  age?: Maybe<Scalars['Int']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  fullName?: Maybe<Scalars['String']>,
  profilePhoto?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  verifiedByEmail: Scalars['Boolean'],
  verfiedByPhoneNumber: Scalars['Boolean'],
  isDriving: Scalars['Boolean'],
  isRiding: Scalars['Boolean'],
  isTaken: Scalars['Boolean'],
  lastLng?: Maybe<Scalars['Float']>,
  lastLat?: Maybe<Scalars['Float']>,
  lastOrientation?: Maybe<Scalars['Float']>,
  facebookID?: Maybe<Scalars['String']>,
  chat?: Maybe<Chat>,
  messages?: Maybe<Array<Maybe<Message>>>,
  verifications?: Maybe<Array<Maybe<Verification>>>,
  ridesAsPassenger?: Maybe<Array<Maybe<Ride>>>,
  ridesAsDriver?: Maybe<Array<Maybe<Ride>>>,
  createdAt: Scalars['String'],
  updatedAt?: Maybe<Scalars['String']>,
};

export type Verification = {
   __typename?: 'Verification',
  id: Scalars['Int'],
  target: Scalars['String'],
  payload: Scalars['String'],
  used: Scalars['Boolean'],
  key: Scalars['String'],
  user: User,
  createdAt: Scalars['String'],
  updatedAt?: Maybe<Scalars['String']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<User>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Chat: ResolverTypeWrapper<Chat>,
  Message: ResolverTypeWrapper<Message>,
  Verification: ResolverTypeWrapper<Verification>,
  Ride: ResolverTypeWrapper<Ride>,
  Mutation: ResolverTypeWrapper<{}>,
  FacebookConnectPayload: ResolverTypeWrapper<FacebookConnectPayload>,
  Place: ResolverTypeWrapper<Place>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  Int: Scalars['Int'],
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Float: Scalars['Float'],
  Chat: Chat,
  Message: Message,
  Verification: Verification,
  Ride: Ride,
  Mutation: {},
  FacebookConnectPayload: FacebookConnectPayload,
  Place: Place,
};

export type ChatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  messages?: Resolver<Array<Maybe<ResolversTypes['Message']>>, ParentType, ContextType>,
  participants?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type FacebookConnectPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacebookConnectPayload'] = ResolversParentTypes['FacebookConnectPayload']> = {
  responseStatus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  chat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  ConnectFacebook?: Resolver<ResolversTypes['FacebookConnectPayload'], ParentType, ContextType, RequireFields<MutationConnectFacebookArgs, 'firstName' | 'lastName' | 'facebookID'>>,
};

export type PlaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Place'] = ResolversParentTypes['Place']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isFavorite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
};

export type RideResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ride'] = ResolversParentTypes['Ride']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  pickUpAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  pickUpLatitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  pickUpLongitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  dropOffAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  dropOffLattude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  dropOffLongitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  distance?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  driver?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  passenger?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  profilePhoto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  verifiedByEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  verfiedByPhoneNumber?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isDriving?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isRiding?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isTaken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastLng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lastLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lastOrientation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  facebookID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  chat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType>,
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>,
  verifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Verification']>>>, ParentType, ContextType>,
  ridesAsPassenger?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ride']>>>, ParentType, ContextType>,
  ridesAsDriver?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ride']>>>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type VerificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Verification'] = ResolversParentTypes['Verification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  target?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  used?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Chat?: ChatResolvers<ContextType>,
  FacebookConnectPayload?: FacebookConnectPayloadResolvers<ContextType>,
  Message?: MessageResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Place?: PlaceResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Ride?: RideResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  Verification?: VerificationResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
