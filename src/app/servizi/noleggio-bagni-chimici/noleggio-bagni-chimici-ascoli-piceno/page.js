import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Ascoli Piceno",
  canonical: links.servizi["noleggio-bagni-chimici"]["ascoli-piceno"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Ascoli Piceno",
  locationNames: { label: "Ascoli Piceno", href: "ascoli-piceno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["ascoli-piceno"],
      name: "Ascoli Piceno",
  }),
});
