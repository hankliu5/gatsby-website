import { forceCheck } from "react-lazyload";

export function featureNavigator(e) {
    e && e.preventDefault();

    if (this.props.navigatorPosition === "is-aside") {
        if (this.props.isWideScreen) {
            this.props.setNavigator
        }
    }
}