import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Roma" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Roma", 
    locationNames: {label: "Roma", href: "roma"}  
});
