import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Terranuova Bracciolini",
  canonical: links.servizi["noleggio-bagni-chimici"]["terranuova-bracciolini"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Terranuova Bracciolini",
  locationNames: { label: "Terranuova Bracciolini", href: "terranuova-bracciolini" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
