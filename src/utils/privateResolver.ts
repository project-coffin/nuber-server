const privateResolver = resolverFunction => async (root, args, context, info) => {
  if (context.req.user) {
    throw new Error('No JWT. denied to access.')
  }

  const resolved = await resolverFunction(root, args, context, info)
  return resolved
}

export default privateResolver
