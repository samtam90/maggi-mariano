import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Badia Prataglia",
  canonical: links.servizi["noleggio-bagni-chimici"]["badia-prataglia"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Badia Prataglia",
  locationNames: { label: "Badia Prataglia", href: "badia-prataglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
