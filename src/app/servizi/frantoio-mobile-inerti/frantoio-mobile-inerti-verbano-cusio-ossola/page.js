import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Verbano-Cusio-Ossola", 
    canonical: links.servizi["frantoio-mobile-inerti"]["verbano-cusio-ossola"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"}  
});
