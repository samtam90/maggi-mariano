import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bagno a Ripoli",
  canonical: links.servizi["noleggio-bagni-chimici"]["bagno-a-ripoli"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bagno a Ripoli",
  locationNames: { label: "Bagno a Ripoli", href: "bagno-a-ripoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
