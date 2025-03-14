import { mount, el } from '../../node_modules/redom/dist/redom.es';
import Input from '../atom/input';
import LoginAndPassFrom from '../widget/loginAndPassFrom';

export default class RegFrom {
    constructor() {
        this.el = this._ui_render();
    }

    _ui_render = () => {
        return (
            <div className='d-flex flex-column'>
                <LoginAndPassFrom />
                <Input label='Repeat password' />
            </div>
        )
    }
}
