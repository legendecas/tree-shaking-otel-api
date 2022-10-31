/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export * from './baggage/types';
export { baggageEntryMetadataFromString } from './baggage/utils';
export * from './common/Exception';
export * from './common/Time';
export * from './common/Attributes';
export * from './diag';
export * from './propagation/TextMapPropagator';
export * from './trace/attributes';
export * from './trace/link';
export * from './trace/ProxyTracer';
export * from './trace/ProxyTracerProvider';
export * from './trace/Sampler';
export * from './trace/SamplingResult';
export * from './trace/span_context';
export * from './trace/span_kind';
export * from './trace/span';
export * from './trace/SpanOptions';
export * from './trace/status';
export * from './trace/trace_flags';
export * from './trace/trace_state';
export { createTraceState } from './trace/internal/utils';
export * from './trace/tracer_provider';
export * from './trace/tracer';
export * from './trace/tracer_options';
export { isSpanContextValid, isValidTraceId, isValidSpanId, } from './trace/spancontext-utils';
export { INVALID_SPANID, INVALID_TRACEID, INVALID_SPAN_CONTEXT, } from './trace/invalid-span-constants';
export * from './context/context';
export * from './context/types';

// MARK: - Patch starts
import { context } from './context-api';
import { trace } from './trace-api';
import { propagation } from './propagation-api';
import { diag } from './diag-api';

export {
  context,
  trace,
  propagation,
  diag,
}
// MARK: - Patch ends

export default {
    trace: trace,
    context: context,
    propagation: propagation,
    diag: diag,
};
//# sourceMappingURL=index.js.map
