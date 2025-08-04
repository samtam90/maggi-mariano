import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto acqua Barletta-Andria-Trani",
});
export default withBaseProps({ 
    title: "Trasporto acqua Barletta-Andria-Trani", 
    locationNames: {label: "Barletta-Andria-Trani", href: "barletta-andria-trani"}  
});