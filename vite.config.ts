import { defineConfig } from 'vite';

export default defineConfig({
        optimizeDeps: {
                include: ['protopb/hello_grpc_web_pb']
        }
});
