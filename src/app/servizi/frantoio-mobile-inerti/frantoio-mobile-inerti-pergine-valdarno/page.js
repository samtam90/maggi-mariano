import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({ 
    title: "Frantoio mobile inerti Pergine Valdarno", 
    canonical: links.servizi["frantoio-mobile-inerti"]["pergine-valdarno"] 
});
export default withBaseProps({ 
    title: "Frantoio mobile inerti Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"}  
});
