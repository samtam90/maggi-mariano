import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Sondrio",
  canonical: links.servizi["noleggio-bagni-chimici"]["sondrio"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Sondrio",
  locationNames: { label: "Sondrio", href: "sondrio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["sondrio"],
      name: "Sondrio",
  }),
});
