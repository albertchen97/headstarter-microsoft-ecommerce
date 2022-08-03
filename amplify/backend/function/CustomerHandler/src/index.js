// Code here will be passed off and deployed into AWS with Lambda

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  // Console logging the event for testing
  // The log will be updated on the cloud watch
  console.log(event);
  const customerId = event.pathParameters.customerId;
  const customer = {
    customerId: customerId,
    customerName: "Customer" + customerId,
  };
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  CORS = Cross-Origin Resource Sharing (https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(customer),
  };
  return response;
};
