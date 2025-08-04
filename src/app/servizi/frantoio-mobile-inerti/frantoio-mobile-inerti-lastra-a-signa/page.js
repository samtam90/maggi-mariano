import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Lastra a Signa", 
    canonical: links.servizi["frantoio-mobile-inerti"]["lastra-a-signa"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Lastra a Signa", 
    locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"}  
});
