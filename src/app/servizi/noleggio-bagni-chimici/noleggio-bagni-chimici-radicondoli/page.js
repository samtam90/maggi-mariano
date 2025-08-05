import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Radicondoli",
  canonical: links.servizi["noleggio-bagni-chimici"]["radicondoli"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Radicondoli",
  locationNames: { label: "Radicondoli", href: "radicondoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
