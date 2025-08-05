import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Castel Focognano",
  canonical: links.servizi["noleggio-bagni-chimici"]["castel-focognano"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Castel Focognano",
  locationNames: { label: "Castel Focognano", href: "castel-focognano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
