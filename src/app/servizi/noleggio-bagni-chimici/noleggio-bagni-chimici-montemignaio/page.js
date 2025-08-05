import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Montemignaio",
  canonical: links.servizi["noleggio-bagni-chimici"]["montemignaio"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Montemignaio",
  locationNames: { label: "Montemignaio", href: "montemignaio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
