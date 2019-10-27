import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
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

export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  password: Scalars['String'],
  age?: Maybe<Scalars['Int']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  fullName?: Maybe<Scalars['String']>,
  profilePhoto?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phoneNumber: Scalars['String'],
  verifiedByEmail: Scalars['Boolean'],
  verfiedByPhoneNumber: Scalars['Boolean'],
  isDriving: Scalars['Boolean'],
  isRiding: Scalars['Boolean'],
  isTaken: Scalars['Boolean'],
  lastLng?: Maybe<Scalars['Float']>,
  lastLat?: Maybe<Scalars['Float']>,
  lastOrientation?: Maybe<Scalars['Float']>,
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
  Place: ResolverTypeWrapper<Place>,
  Verification: ResolverTypeWrapper<Verification>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  Int: Scalars['Int'],
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Float: Scalars['Float'],
  Place: Place,
  Verification: Verification,
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

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  profilePhoto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  verifiedByEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  verfiedByPhoneNumber?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isDriving?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isRiding?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isTaken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastLng?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lastLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  lastOrientation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type VerificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Verification'] = ResolversParentTypes['Verification']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  target?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  used?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Place?: PlaceResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  Verification?: VerificationResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
