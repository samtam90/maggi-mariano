import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Figline Valdarno",
  canonical: links.servizi["noleggio-bagni-chimici"]["figline-valdarno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Figline Valdarno", 
  locationNames: {label: "Figline Valdarno", href: "figline-valdarno"} 
});
