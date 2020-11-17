            proj4.defs("EPSG:25830", "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

            ol.proj.proj4.register(proj4);

            var projection = new ol.proj.Projection({
                  code: 'EPSG:25830', 
                  units: 'm'
                  })
            var proj25830 = ol.proj.get('EPSG:25830');
            

            
            // Capa de OSM
            

            var osm = 
            new ol.layer.Tile({
                title: 'OSM',
                source: new ol.source.OSM()
              });
            
            // Caracteristicas del mapa

            var map = new ol.Map({
                    layers: [osm],
                    target: 'map',
                    view: new ol.View({
                    center: [424638 , 4484948],
                    zoom: 16,
                    projection: new ol.proj.Projection({
                        code: 'EPSG:25830', 
                        units: 'm'
                    }),
                  }),

            


            // Controles de mapa

                    controls: [
                    new ol.control.ZoomSlider(),
                    new ol.control.Zoom(),
                    new ol.control.ScaleLine(),
                   ]
                 });
        
            
            
             
      
            
            
            
            
            
            
            
            
            
            


            
            
           
            


            





