import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti La Spezia" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti La Spezia", 
    locationNames: {label: "La Spezia", href: "la-spezia"}  
});
