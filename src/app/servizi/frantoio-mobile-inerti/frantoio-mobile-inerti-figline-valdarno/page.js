import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Figline Valdarno", 
    canonical: links.servizi["frantoio-mobile-inerti"]["figline-valdarno"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Figline Valdarno", 
    locationNames: {label: "Figline Valdarno", href: "figline-valdarno"}  
});
