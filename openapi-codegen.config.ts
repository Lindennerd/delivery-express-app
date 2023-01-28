import { defineConfig } from "@openapi-codegen/cli";
import {
  generateReactQueryComponents,
  generateSchemaTypes,
} from "@openapi-codegen/typescript";
export default defineConfig({
  deliveryExpressApi: {
    from: {
      source: "url",
      url: "http://localhost:5169/swagger/v1/swagger.json",
    },
    outputDir: "src/api",
    to: async (context) => {
      const filenamePrefix = "deliveryExpressApi";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
