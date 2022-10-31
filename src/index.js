/**
 * If this line is uncommented, only ContextAPI is included in the final
 * bundle.
 */
import { context } from '../patch-applied/@opentelemetry/api';

/**
 * If this line is uncommented, all apis (including DiagAPI, TraceAPI,
 * PropagationAPI) are included in the final bundle.
 */
// import { context } from '@opentelemetry/api';

context.active();
