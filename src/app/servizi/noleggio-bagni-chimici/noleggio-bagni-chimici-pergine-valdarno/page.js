import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pergine Valdarno",
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Pergine Valdarno", 
  locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"} 
});
