import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pratovecchio Stia", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pratovecchio-stia"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pratovecchio Stia", 
    locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"}  
});
