import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pergine Valdarno",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"}  
});