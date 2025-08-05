import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castel San Niccolò",
  canonical: links.servizi["noleggio-bagni-chimici"]["castel-san-niccolo"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castel San Niccolò",
  locationNames: { label: "Castel San Niccolò", href: "castel-san-niccolo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
