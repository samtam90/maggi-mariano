import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Barletta-Andria-Trani",
  canonical: links.servizi["noleggio-bagni-chimici"]["barletta-andria-trani"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Barletta-Andria-Trani",
  locationNames: { label: "Barletta-Andria-Trani", href: "barletta-andria-trani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["barletta-andria-trani"],
      name: "Barletta-Andria-Trani",
  }),
});
