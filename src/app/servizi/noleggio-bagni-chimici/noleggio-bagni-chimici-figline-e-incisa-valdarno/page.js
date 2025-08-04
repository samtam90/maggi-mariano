import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Figline e Incisa Valdarno",
  canonical: links.servizi["noleggio-bagni-chimici"]["figline-e-incisa-valdarno"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Figline e Incisa Valdarno", 
  locationNames: {label: "Figline e Incisa Valdarno", href: "figline-e-incisa-valdarno"} 
});
