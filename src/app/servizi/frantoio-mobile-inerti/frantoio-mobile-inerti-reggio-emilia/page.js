import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Reggio Emilia" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"}  
});
