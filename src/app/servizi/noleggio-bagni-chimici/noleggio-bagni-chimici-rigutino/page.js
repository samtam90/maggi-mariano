import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Rigutino",
  canonical: links.servizi["noleggio-bagni-chimici"]["rigutino"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Rigutino",
  locationNames: { label: "Rigutino", href: "rigutino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
