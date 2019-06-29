module.exports.hello = ( event, context, callback ) => {
	const time = new Date();

	// Do nothing else other than log a message.
	// This'll show up once per minute given the `- schedule: rate(1 minute)` config item
	// in serveless.yml.
	// We can monitor the log of this particular function with:
	// > serverless logs --function hellox --tail
	console.log( `Hello, serverless! "${ context.functionName }" ran at: ${ time }` );

	callback( null );
};
