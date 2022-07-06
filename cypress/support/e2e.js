import './commands';
import 'cypress-real-events/support';
import 'cy-mobile-commands';
require('cypress-downloadfile/lib/downloadFileCommand');
require('cypress-xpath');
import 'cypress-wait-until';
import 'cypress-iframe';
require('cy-verify-downloads').addCustomCommand();
