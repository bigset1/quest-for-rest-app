import superAgent from 'superagent';
import superAgentPrefix from 'superagent-prefix';
import {restUrl} from '../config';

superAgent.use(superAgentPrefix(restUrl));

