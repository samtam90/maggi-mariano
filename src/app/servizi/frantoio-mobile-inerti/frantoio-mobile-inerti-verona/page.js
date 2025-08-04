import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Verona", 
    canonical: links.servizi["frantoio-mobile-inerti"]["verona"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Verona", 
    locationNames: {label: "Verona", href: "verona"}  
});
