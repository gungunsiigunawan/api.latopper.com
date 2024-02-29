export default {
    openapi: '3.0.0',
    info: {
      title: 'Latopper.com',
      version: '1.0.0',
      description: 'Application for e-Invitation',
    },
    servers: [
      {
        url: 'https://api.latopper.com', 
        description: 'Development server',
        validator: true
      },
    ],
  };
  