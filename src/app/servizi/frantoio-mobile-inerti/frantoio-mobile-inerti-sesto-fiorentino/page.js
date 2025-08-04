import { getMetadata, withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Frantoio mobile inerti Sesto Fiorentino" });
export default withBaseProps({ 
    title: "Frantoio mobile inerti Sesto Fiorentino", 
    locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"}  
});
