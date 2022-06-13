
import {Ziggy} from '@/ziggy';
import route from 'ziggy-js';

export const useRouter = () => {
    const useAbsoluteRelative = false;

    return (name, params, absolute, config = Ziggy) => {
        const uri = route(name, params, absolute, config);

        if (useAbsoluteRelative) {
            const split = uri.split('.test/', 2);
            return split[1] ?? '/';
        }

        return uri;
    };
};
