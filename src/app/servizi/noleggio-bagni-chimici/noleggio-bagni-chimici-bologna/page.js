import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Bologna",
  canonical: links.servizi["noleggio-bagni-chimici"]["bologna"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Bologna",
  locationNames: { label: "Bologna", href: "bologna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["bologna"],
      name: "Bologna",
  }),
});
