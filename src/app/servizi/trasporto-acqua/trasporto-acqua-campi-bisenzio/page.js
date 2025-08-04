import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Campi Bisenzio",
});
export default withBaseProps({ 
    title: "Trasporto acqua Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"}  
});