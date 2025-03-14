import { mount, el } from '../../node_modules/redom/dist/redom.es';
import LoginAndPassFrom from '../widget/loginAndPassFrom';

export default class LoginFrom {
    constructor() {
        this.el = this._ui_render();
    }

    _ui_render = () => {
        return (
            <div className='d-flex flex-column'>
                <LoginAndPassFrom />
            </div>
        )
    }
}
