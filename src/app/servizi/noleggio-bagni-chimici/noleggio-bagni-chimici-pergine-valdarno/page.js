import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Pergine Valdarno",
  canonical: links.servizi["noleggio-bagni-chimici"]["pergine-valdarno"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Pergine Valdarno",
  locationNames: { label: "Pergine Valdarno", href: "pergine-valdarno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
