import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Latina",
  canonical: links.servizi["noleggio-bagni-chimici"]["latina"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Latina",
  locationNames: { label: "Latina", href: "latina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["latina"],
      name: "Latina",
  }),
});
