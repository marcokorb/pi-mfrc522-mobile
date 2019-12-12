import global from "global";
import {
	Buffer
} from "buffer";
import process from "process";

global.Buffer = Buffer;
global.process = process;
if(!global.self)
	global.self = global;