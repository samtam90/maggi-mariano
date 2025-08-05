import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bucine",
  canonical: links.servizi["noleggio-bagni-chimici"]["bucine"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bucine",
  locationNames: { label: "Bucine", href: "bucine" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
