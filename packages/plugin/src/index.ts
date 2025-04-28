import loadingHTML from './plugins/loadingHTML';
import modules from './plugins/modules';

export default function reactModules() {
  return [loadingHTML(), modules()];
}