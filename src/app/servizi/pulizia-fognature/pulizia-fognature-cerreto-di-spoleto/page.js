import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Cerreto di Spoleto" });
export default withBaseProps({ 
    title: "Pulizia fognature Cerreto di Spoleto", 
    locationNames: {label: "Cerreto di Spoleto", href: "cerreto-di-spoleto"}  
});
