import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pietralunga", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pietralunga"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pietralunga", 
    locationNames: {label: "Pietralunga", href: "pietralunga"}  
});
